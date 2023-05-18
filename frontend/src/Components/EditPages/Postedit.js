// import React, { useEffect, useState } from "react";
// import "./Style.css";

// import { Link } from "react-router-dom";

// const Service = () => {
//   return (
//     <div>
//       <div className="main_container">
//         <br />
//         <br />
//         <div className="item fw-bold">Post Management</div>

//         <div className="item">
//           <div className="row mt-5 ps-3">
//             <div className="row">
//               <div className=" col-lg-6 col-md-12 col-sm-12">
//                 <div className="row"></div>
//               </div>
//             </div>
//           </div>

//           <div className="row mt-9">
//             <div className="col">
//               <h1>Edit Post</h1>
//               <div className="row mt-5 px-3">
//                 <form id="clientForm">
//                   <div className="row">
//                     <div className="col d-flex justify-content-end align-items-center">
//                       <div className="col d-flex justify-content-end">
//                         <div>
//                           <button
//                             hidden
//                             className="btn btnEditImg"
//                             id="btnEditImg"
//                             type="button"
//                           >
//                             <i className="fa-solid fa-pen text-white" />
//                           </button>
//                           <button
//                             hidden
//                             className="btn btnImgDelete"
//                             id="btnImgDelete"
//                             type="button"
//                           >
//                             <i className="fa-solid fa-trash-can d-inline text-white" />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="row mt-4">
//                     <div className="col">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Post Title"
//                       />
//                     </div>
//                   </div>
//                   <div className="row mt-4">
//                     <div className="col">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Post Description"
//                       />
//                     </div>
//                   </div>
//                   <div className="row mt-4">
//                     <div className="col">
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Post Imaage"
//                       />
//                     </div>
//                   </div>

//                   <div className="row mt-5">
//                     <div className="d-flex justify-content-around align-items-center">
//                       <button type="submit" className="btn btn-success">
//                         Add to Service
//                       </button>
//                       <button
//                         type="button"
//                         className="btn btn-danger"
//                         onClick={handleClear}
//                       >
//                         Clear
//                       </button>
//                       <Link to="">
//                         <button
//                           type="button"
//                           className="btn btn-primary"
//                           onClick={() => {}}
//                         >
//                           View
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default Service;
