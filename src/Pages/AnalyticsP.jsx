import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import {
  collection,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { auth, db } from "../firebase";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts";

import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

export default class AnalyticsP extends Component {
  state = {
    mode: "monthly",
    selectedMonth: new Date().getMonth(),
    data: [],
    loading: true
  };

  componentDidMount() {
    this.fetchAnalytics();
  }

  fetchAnalytics = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const q = query(
      collection(db, "customers"),
      where("ownerId", "==", user.uid)
    );

    const snapshot = await getDocs(q);

    const customers = snapshot.docs.map(doc => ({
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate()
    }));

    this.generateAnalytics(customers);
  };

  generateAnalytics = (customers) => {
    let map = {};

    customers.forEach(c => {
      if (!c.createdAt) return;

      let key;
      if (this.state.mode === "monthly") {
        if (c.createdAt.getMonth() !== this.state.selectedMonth) return;
        key = `Week ${Math.ceil(c.createdAt.getDate() / 7)}`;
      } else {
        key = c.createdAt.getFullYear();
      }

      map[key] = (map[key] || 0) + Number(c.amount || 0);
    });

    const chartData = Object.keys(map).map(k => ({
      label: k,
      value: map[k]
    }));

    this.setState({ data: chartData, loading: false });
  };

  downloadExcel = () => {
    const ws = XLSX.utils.json_to_sheet(this.state.data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Analytics");

    const buffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(new Blob([buffer]), "analytics.xlsx");
  };

  render() {
    if (this.state.loading) {
      return <div className="text-center mt-[50px]">Loading...</div>;
    }

    return (
      <div className="bg-[#FFF9EC] min-h-screen">
        <Navbar />

        <div className="container px-4 mt-[40px]">

          <div className="flex justify-between mb-[20px]">
            <h2 className="text-[40px] font-bold">Analytics</h2>

            <div className="flex gap-4">
              <button
                onClick={() => window.history.back()}
                className="bg-white border px-5 py-2 rounded-lg font-bold"
              >
                Back
              </button>

              <button
                onClick={this.downloadExcel}
                className="bg-[#D1A84B] text-white px-5 py-2 rounded-lg font-bold"
              >
                Download Excel
              </button>
            </div>
          </div>

          <div className="flex gap-4 mb-[20px]">
            <button
              onClick={() => this.setState({ mode: "monthly" }, this.fetchAnalytics)}
              className={`px-5 py-2 rounded-lg font-bold ${
                this.state.mode === "monthly"
                  ? "bg-[#D1A84B] text-white"
                  : "bg-white border"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => this.setState({ mode: "yearly" }, this.fetchAnalytics)}
              className={`px-5 py-2 rounded-lg font-bold ${
                this.state.mode === "yearly"
                  ? "bg-[#D1A84B] text-white"
                  : "bg-white border"
              }`}
            >
              Yearly
            </button>

            {this.state.mode === "monthly" && (
              <select
                className="border px-4 py-2 rounded-lg"
                onChange={(e) =>
                  this.setState(
                    { selectedMonth: Number(e.target.value) },
                    this.fetchAnalytics
                  )
                }
              >
                {[...Array(12)].map((_, i) => (
                  <option key={i} value={i}>
                    {new Date(0, i).toLocaleString("en", { month: "long" })}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="bg-white p-[30px] rounded-[20px]">
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={this.state.data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="label" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#D1A84B"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    );
  }
}