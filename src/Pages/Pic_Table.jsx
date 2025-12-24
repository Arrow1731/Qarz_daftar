import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import { collection, query, where, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

export default class Pic_Table extends Component {
    state = {
        customers: [],
        loading: true,
    };

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (!user) {
                window.location.href = "/Login";
                return;
            }
            this.fetchCustomers(user.uid);
        });
    }

    fetchCustomers = async (uid) => {
        try {
            const q = query(
                collection(db, "customers"),
                where("ownerId", "==", uid)
            );

            const snapshot = await getDocs(q);

            const customers = snapshot.docs.map((doc, index) => ({
                id: doc.id,
                index: index + 1,
                ...doc.data(),
            }));

            this.setState({ customers, loading: false });
        } catch (error) {
            console.error("Error loading customers:", error);
            this.setState({ loading: false });
        }
    };

    render() {
        if (this.state.loading) {
            return (
                <div className="text-center mt-[50px] text-[25px]">
                    Yuklanmoqda...
                </div>
            );
        }

        return (
            <div className="bg-[#FFF9EC] min-h-screen">
                <Navbar />

                <div className="container px-4 mt-[50px]">

                    {/* HEADER */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-[30px] gap-4">
                        <h2 className="text-[35px] md:text-[45px] font-bold">
                            Qarzdorlar ro’yxati
                        </h2>

                        <button
                            onClick={() => window.history.back()}
                            className="bg-white border-[2px] border-[#D1A84B] text-[#D1A84B] px-6 py-2 rounded-lg font-bold"
                        >
                            Orqaga
                        </button>
                    </div>

                    {/* TABLE */}
                    <div className="bg-white rounded-[20px] p-[20px] overflow-x-auto">
                        <table className="w-full min-w-[700px] border-collapse">
                            <thead>
                                <tr className="border-b text-left">
                                    <th className="py-3 px-2">#</th>
                                    <th className="py-3 px-2">Ism</th>
                                    <th className="py-3 px-2">Telefon</th>
                                    <th className="py-3 px-2">Qarz miqdori</th>
                                    <th className="py-3 px-2">Sana</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.customers.length === 0 && (
                                    <tr>
                                        <td colSpan="5" className="text-center py-6">
                                            Qarzdorlar topilmadi
                                        </td>
                                    </tr>
                                )}

                                {this.state.customers.map((c) => (
                                    <tr
                                        key={c.id}
                                        className="border-b hover:bg-[#FFF9EC]"
                                    >
                                        <td className="py-3 px-2">{c.index}</td>
                                        <td className="py-3 px-2">{c.fullName}</td>
                                        <td className="py-3 px-2">{c.phone}</td>
                                        <td className="py-3 px-2 font-bold text-[#D1A84B]">
                                            {c.amount} so’m
                                        </td>
                                        <td className="py-3 px-2">
                                            {c.createdAt?.toDate
                                                ? c.createdAt.toDate().toLocaleDateString()
                                                : ""}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        );
    }
}