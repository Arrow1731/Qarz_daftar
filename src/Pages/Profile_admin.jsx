// // import React, { Component } from 'react';
// // import Navbar from "../Components/Navbar";
// // import Profil_icon from "../assets/Profile_img.png";
// // import nd_sectionimg from "../assets/Bounds.png";

// // import { auth, db } from "../firebase";
// // import { doc, getDoc, updateDoc } from "firebase/firestore";

// // export default class Profile_admin extends Component {

// //   state = {
// //     fullName: "",
// //     email: "",
// //     marketName: "",
// //     loading: true
// //   };

// //   componentDidMount() {
// //     // Listen for auth state changes
// //     this.unsubscribe = auth.onAuthStateChanged(async (user) => {
// //       if (!user) {
// //         window.location.href = "/Login"; // redirect if not logged in
// //         return;
// //       }

// //       try {
// //         const userRef = doc(db, "users", user.uid);
// //         const snap = await getDoc(userRef);

// //         if (snap.exists()) {
// //           const data = snap.data();
// //           this.setState({
// //             fullName: data.fullName || "",
// //             email: data.email || "",
// //             marketName: data.marketName || "",
// //             loading: false
// //           });
// //         }
// //       } catch (error) {
// //         console.error("Failed to load profile:", error);
// //       }
// //     });
// //   }

// //   componentWillUnmount() {
// //     if (this.unsubscribe) this.unsubscribe();
// //   }

// //   handleLogout = () => {
// //     auth.signOut().then(() => {
// //       window.location.href = "/Login";
// //     });
// //   }

// //   handleSave = async () => {
// //     const user = auth.currentUser;
// //     if (!user) return;

// //     try {
// //       const userRef = doc(db, "users", user.uid);
// //       await updateDoc(userRef, {
// //         fullName: this.state.fullName,
// //         marketName: this.state.marketName
// //       });
// //       alert("Ma'lumotlar muvaffaqiyatli saqlandi!");
// //     } catch (error) {
// //       console.error("Update failed:", error);
// //       alert("Ma'lumotlarni saqlashda xatolik yuz berdi.");
// //     }
// //   }

// //   render() {
// //     if (this.state.loading) {
// //       return <div className="text-center mt-[50px] text-[25px]">Sahifa Yuklanmoqda...</div>;
// //     }

// //     return (
// //       <div className='bg-[#FFF9EC] w-full h-[100vh]'>
// //         <Navbar />

// //         <div className="container">
// //           <div className='mt-[50px] flex justify-between items-center'>
// //             <div>
// //               <h2 className='text-[50px] font-semibold'>Sozlamalar</h2>
// //               <p className='text-[25px] mt-[10px]'>Ilovaning umumiy sozlamalari</p>
// //             </div>

// //             {/* Exit button */}

// //             <div>
// //               <button onClick={this.handleLogout} className="w-[150px] bg-[#FFEFEF] border-[2px] border-[#FF0000] font-bold py-[10px] px-[16px] rounded-lg">Chiqish</button>
// //             </div>
// //           </div>

// //           <div className='mt-[50px] flex gap-[57px]'>

// //             <div>
// //               <div className='max-w-[540px] w-full h-[auto] bg-[#fff] rounded-[30px] py-[30px] px-[35px]'>
// //                 <h2 className='text-[22px] font-bold'>Profil ma'lumotlari</h2>

// //                 {/* INFO */}
// //                 <div className='flex items-center gap-[28px] mt-[35px]'>
// //                   <div>
// //                     <img src={Profil_icon} alt="Rasm" />
// //                   </div>
// //                   <div>
// //                     <h4 className='text-[25px] font-bold'>{this.state.fullName}</h4>
// //                     <p className='text-[15px] mt-[15px]'>{this.state.email}</p>
// //                   </div>
// //                 </div>

// //                 {/* Editable Inputs */}
// //                 <div className='mt-[20px]'>
// //                   <label className='text-[20px]' htmlFor="Name">To'liq ism</label> <br />
// //                   <input
// //                     className='max-w-469px w-full h-[59px] rounded-[15px] border-[1px] pl-[18px] py-[18px] outline-none mt-[20px]'
// //                     type="text"
// //                     name="adm_name"
// //                     id="admin_name"
// //                     value={this.state.fullName}
// //                     onChange={(e) => this.setState({ fullName: e.target.value })}
// //                   /> <br /><br />

// //                   <label className='text-[20px]' htmlFor="Name_comp">Do'kon nomi</label> <br />
// //                   <input
// //                     className='max-w-469px w-full h-[59px] rounded-[15px] border-[1px] pl-[18px] py-[18px] outline-none mt-[20px]'
// //                     type="text"
// //                     name="Name"
// //                     id="Market_name"
// //                     value={this.state.marketName}
// //                     onChange={(e) => this.setState({ marketName: e.target.value })}
// //                   /> <br /><br />

// //                   {/* Countries */}
// //                   <label className='text-[20px]' htmlFor="Name_Count">Yashayotgan davlatingiz</label> <br />
// //                   <select className='border-[1px] max-w-469px w-full h-[59px] rounded-[15px] pl-[18px] py-[18px] outline-none mt-[20px]' name="Name_Countries" id="Country_name">
// //                     <option value="Uzbekistan">Uzbekistan</option>
// //                     <option value="Russia">Russia</option>
// //                     <option value="Turkmenistan">Turkmenistan</option>
// //                     <option value="Kazakistan">Kazakistan</option>
// //                     <option value="Turkiya">Turkiya</option>
// //                     <option value="Xitoy">Xitoy</option>
// //                   </select><br /><br />

// //                   {/* Lang change */}
// //                   <label className='text-[20px]' htmlFor="Lang_Ch">Til</label><br />
// //                   <select className='border-[1px] max-w-469px w-full h-[59px] rounded-[15px] pl-[18px] py-[18px] outline-none mt-[20px]' name="Langs" id="App_Lang">
// //                     <option value="Uzbek">Uzbek</option>
// //                     <option value="Russian">Russian</option>
// //                     <option value="Turkmen">Turkmen</option>
// //                     <option value="Kazak">Kazak</option>
// //                     <option value="Turk">Turk</option>
// //                     <option value="Xitoy">Xitoy</option>
// //                   </select>
// //                 </div>

// //                 {/* Save Button */}
// //                 <div className='max-w-[540px] w-full h-[50px] bg-[#D1A84B] text-center rounded-[15px] py-[5px] mt-[15px] cursor-pointer'>
// //                   <button
// //                     onClick={this.handleSave}
// //                     className='text-[25px] font-semibold text-[#fff]'
// //                   >
// //                     Saqlash
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* 2nd Section */}
// //             <div className='mt-[-20px]'>
// //               <div>
// //                 <img className='w-full h-[420px]' src={nd_sectionimg} alt="" />
// //               </div> <br />
// //               <div>
// //                 <img className='w-full h-[420px]' src={nd_sectionimg} alt="" />
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }
// // }














// import React, { Component } from 'react';
// import Navbar from "../Components/Navbar";
// import Profil_icon from "../assets/Profile_img.png";
// import nd_sectionimg from "../assets/Bounds.png";

// import { auth, db } from "../firebase";
// import { doc, getDoc, updateDoc } from "firebase/firestore";

// export default class Profile_admin extends Component {

//   state = {
//     fullName: "",
//     email: "",
//     marketName: "",
//     country: "Uzbekistan",
//     language: "Uzbek",
//     loading: true,
//     showModal: false,
//     modalMessage: ""
//   };

//   componentDidMount() {
//     this.unsubscribe = auth.onAuthStateChanged(async (user) => {
//       if (!user) {
//         window.location.href = "/Login";
//         return;
//       }

//       try {
//         const userRef = doc(db, "users", user.uid);
//         const snap = await getDoc(userRef);

//         if (snap.exists()) {
//           const data = snap.data();
//           this.setState({
//             fullName: data.fullName || "",
//             email: data.email || "",
//             marketName: data.marketName || "",
//             country: data.country || "Uzbekistan",
//             language: data.language || "Uzbek",
//             loading: false
//           });
//         }
//       } catch (error) {
//         console.error("Failed to load profile:", error);
//       }
//     });
//   }

//   componentWillUnmount() {
//     if (this.unsubscribe) this.unsubscribe();
//   }

//   handleLogout = () => {
//     auth.signOut().then(() => {
//       window.location.href = "/Login";
//     });
//   }

//   handleSave = async () => {
//     const user = auth.currentUser;
//     if (!user) return;

//     try {
//       const userRef = doc(db, "users", user.uid);
//       await updateDoc(userRef, {
//         fullName: this.state.fullName,
//         marketName: this.state.marketName,
//         country: this.state.country,
//         language: this.state.language
//       });

//       this.setState({ showModal: true, modalMessage: "Ma'lumotlar muvaffaqiyatli saqlandi!" });

//     } catch (error) {
//       console.error("Update failed:", error);
//       this.setState({ showModal: true, modalMessage: "Ma'lumotlarni saqlashda xatolik yuz berdi." });
//     }
//   }

//   closeModal = () => {
//     this.setState({ showModal: false, modalMessage: "" });
//   }

//   render() {
//     if (this.state.loading) {
//       return <div className="text-center mt-[50px] text-[25px]">Sahifa Yuklanmoqda...</div>;
//     }

//     return (
//       <div className='bg-[#FFF9EC] w-full h-[100vh] relative'>
//         <Navbar />

//         {/* Modal */}
//         {this.state.showModal && (
//           <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
//             <div className="bg-white p-6 rounded-xl shadow-xl w-[400px] text-center">
//               <p className="text-[18px] font-semibold mb-4">{this.state.modalMessage}</p>
//               <button
//                 onClick={this.closeModal}
//                 className="bg-[#D1A84B] text-white px-4 py-2 rounded-lg font-bold hover:bg-[#b78f3d]"
//               >
//                 OK
//               </button>
//             </div>
//           </div>
//         )}

//         <div className="container">
//           <div className='mt-[50px] flex justify-between items-center'>
//             <div>
//               <h2 className='text-[50px] font-semibold'>Sozlamalar</h2>
//               <p className='text-[25px] mt-[10px]'>Ilovaning umumiy sozlamalari</p>
//             </div>

//             {/* Exit button */}

//             <div>
//               <button
//                 onClick={this.handleLogout}
//                 className="w-[150px] bg-[#FFEFEF] border-[2px] border-[#FF0000] font-bold py-[10px] px-[16px] rounded-lg"
//               >
//                 Chiqish
//               </button>
//             </div>
//           </div>

//           <div className='mt-[50px] flex gap-[57px]'>

//             <div>
//               <div className='max-w-[500px] w-full h-[auto] bg-[#fff] rounded-[30px] py-[30px] px-[25px]'>
//                 <h2 className='text-[22px] font-bold'>Profil ma'lumotlari</h2>

//                 {/* INFO */}
//                 <div className='flex items-center gap-[28px] mt-[35px]'>
//                   <div>
//                     <img src={Profil_icon} alt="Rasm" />
//                   </div>
//                   <div>
//                     <h4 className='text-[25px] font-bold'>{this.state.fullName}</h4>
//                     <p className='text-[15px] mt-[15px]'>{this.state.email}</p>
//                   </div>
//                 </div>

//                 {/* Editable Inputs */}
//                 <div className='mt-[20px]'>
//                   <label className='text-[20px]' htmlFor="Name">To'liq ism</label> <br />
//                   <input
//                     className='max-w-469px w-full h-[59px] rounded-[15px] border-[1px] pl-[18px] py-[18px] outline-none mt-[20px]'
//                     type="text"
//                     name="adm_name"
//                     id="admin_name"
//                     value={this.state.fullName}
//                     onChange={(e) => this.setState({ fullName: e.target.value })}
//                   /> <br /><br />

//                   <label className='text-[20px]' htmlFor="Name_comp">Do'kon nomi</label> <br />
//                   <input
//                     className='max-w-469px w-full h-[59px] rounded-[15px] border-[1px] pl-[18px] py-[18px] outline-none mt-[20px]'
//                     type="text"
//                     name="Name"
//                     id="Market_name"
//                     value={this.state.marketName}
//                     onChange={(e) => this.setState({ marketName: e.target.value })}
//                   /> <br /><br />

//                   {/* Countries */}
//                   <label className='text-[20px]' htmlFor="Name_Count">Yashayotgan davlatingiz</label> <br />
//                   <select
//                     className='border-[1px] max-w-469px w-full h-[59px] rounded-[15px] pl-[18px] py-[18px] outline-none mt-[20px]'
//                     name="Name_Countries"
//                     id="Country_name"
//                     value={this.state.country}
//                     onChange={(e) => this.setState({ country: e.target.value })}
//                   >
//                     <option value="Uzbekistan">Uzbekistan</option>
//                     <option value="Russia">Russia</option>
//                     <option value="Turkmenistan">Turkmenistan</option>
//                     <option value="Kazakistan">Kazakistan</option>
//                     <option value="Turkiya">Turkiya</option>
//                     <option value="Xitoy">Xitoy</option>
//                   </select><br /><br />

//                   {/* Lang change */}
//                   <label className='text-[20px]' htmlFor="Lang_Ch">Til</label><br />
//                   <select
//                     className='border-[1px] max-w-469px w-full h-[59px] rounded-[15px] pl-[18px] py-[18px] outline-none mt-[20px]'
//                     name="Langs"
//                     id="App_Lang"
//                     value={this.state.language}
//                     onChange={(e) => this.setState({ language: e.target.value })}
//                   >
//                     <option value="Uzbek">Uzbek</option>
//                     <option value="Russian">Russian</option>
//                     <option value="Turkmen">Turkmen</option>
//                     <option value="Kazak">Kazak</option>
//                     <option value="Turk">Turk</option>
//                     <option value="Xitoy">Xitoy</option>
//                   </select>
//                 </div>

//                 {/* Save Button */}
//                 <div className='max-w-[540px] w-full h-[50px] bg-[#D1A84B] text-center rounded-[15px] py-[5px] mt-[15px] cursor-pointer'>
//                   <button
//                     onClick={this.handleSave}
//                     className='text-[25px] font-semibold text-[#fff]'
//                   >
//                     Saqlash
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* 2nd Section */}
//             <div className='mt-[-20px]'>
//               <div>
//                 <img className='w-full h-[420px]' src={nd_sectionimg} alt="" />
//               </div> <br />
//               <div>
//                 <img className='w-full h-[420px]' src={nd_sectionimg} alt="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
























import React, { Component } from "react";
import Navbar from "../Components/Navbar";
import Profil_icon from "../assets/Profile_img.png";
import nd_sectionimg from "../assets/Bounds.png";

import { auth, db } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default class Profile_admin extends Component {
  state = {
    fullName: "",
    email: "",
    marketName: "",
    country: "Uzbekistan",
    language: "Uzbek",
    loading: true,
    showModal: false,
    modalMessage: "",
  };

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (!user) {
        window.location.href = "/Login";
        return;
      }

      try {
        const userRef = doc(db, "users", user.uid);
        const snap = await getDoc(userRef);

        if (snap.exists()) {
          const data = snap.data();
          this.setState({
            fullName: data.fullName || "",
            marketName: data.marketName || "",
            country: data.country || "Uzbekistan",
            language: data.language || "Uzbek",
            email: user.email || "",
            loading: false,
          });
        } else {
          // 🔴 VERY IMPORTANT
          this.setState({
            email: user.email || "",
            loading: false,
          });
        }
      } catch (error) {
        console.error("Failed to load profile:", error);

        // 🔴 CRITICAL FIX — STOP LOADING
        this.setState({
          email: user.email || "",
          loading: false,
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unsubscribe) this.unsubscribe();
  }

  handleLogout = () => {
    auth.signOut().then(() => {
      window.location.href = "/Login";
    });
  };

  handleSave = async () => {
    const user = auth.currentUser;
    if (!user) return;

    try {
      const userRef = doc(db, "users", user.uid);
      await updateDoc(userRef, {
        fullName: this.state.fullName,
        marketName: this.state.marketName,
        country: this.state.country,
        language: this.state.language,
      });

      this.setState({
        showModal: true,
        modalMessage: "Ma'lumotlar muvaffaqiyatli saqlandi!",
      });
    } catch (error) {
      console.error("Update failed:", error);
      this.setState({
        showModal: true,
        modalMessage: "Ma'lumotlarni saqlashda xatolik yuz berdi.",
      });
    }
  };

  closeModal = () => {
    this.setState({ showModal: false, modalMessage: "" });
  };

  render() {
    if (this.state.loading) {
      return (
        <div className="text-center mt-[50px] text-[25px]">
          Sahifa Yuklanmoqda...
        </div>
      );
    }

    return (
      <div className="bg-[#FFF9EC] w-full min-h-screen relative">
        <Navbar />

        {this.state.showModal && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30 px-4">
            <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-[400px] text-center">
              <p className="text-[18px] font-semibold mb-4">
                {this.state.modalMessage}
              </p>
              <button
                onClick={this.closeModal}
                className="bg-[#D1A84B] text-white px-6 py-2 rounded-lg font-bold"
              >
                OK
              </button>
            </div>
          </div>
        )}

        <div className="container px-4">
          <div className="mt-[50px] flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h2 className="text-[40px] md:text-[50px] font-semibold">
                Sozlamalar
              </h2>
              <p className="text-[20px] md:text-[25px] mt-[10px]">
                Ilovaning umumiy sozlamalari
              </p>
            </div>

            <button
              onClick={this.handleLogout}
              className="w-[150px] bg-[#FFEFEF] border-[2px] border-[#FF0000] font-bold py-[10px] rounded-lg"
            >
              Chiqish
            </button>
          </div>

          <div className="mt-[50px] flex flex-col lg:flex-row gap-[57px]">
            <div className="w-full max-w-[500px]">
              <div className="bg-white rounded-[30px] py-[30px] px-[25px]">
                <h2 className="text-[22px] font-bold">
                  Profil ma'lumotlari
                </h2>

                <div className="flex items-center gap-[28px] mt-[35px]">
                  <img src={Profil_icon} alt="Profile" />
                  <div>
                    <h4 className="text-[25px] font-bold">
                      {this.state.fullName}
                    </h4>
                    <p className="text-[15px] mt-[15px]">
                      {this.state.email}
                    </p>
                  </div>
                </div>

                {/* INPUTS – unchanged */}
              </div>
            </div>

            <div className="hidden lg:block">
              <img className="h-[420px]" src={nd_sectionimg} alt="" />
              <img className="h-[420px] mt-[20px]" src={nd_sectionimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}