<<<<<<< HEAD
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { authOptions } from "@/app/api/auth/[...nextauth]/app";

// function Navbar() {
//   const { data: session } = useSession(authOptions);
//   const [cargando, setCargando] = useState(true);

//   useEffect(() => {
//     setCargando(false);
//   }, [session]);

//   if (cargando) return <div>Cargando...</div>;

//   return (
//     <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">
//       <h1 className="text-xl font-bold">NextAuth</h1>
//       <ul className="flex gap-x-2">
//         {!session ? (
//           <>
//             <li>
//               <Link href="/">Inicio</Link>
//             </li>
//             <li>
//               <Link href="/auth/login">Iniciar sesión</Link>
//             </li>
//             <li>
//               <Link href="/auth/register">Registrarse</Link>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link href="/dashboard">Tablero</Link>
//             </li>
//             <li>
//               <button onClick={() => signOut()}>Cerrar sesión</button>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
=======
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { authOptions } from "@/app/api/auth/[...nextauth]/app";

// function Navbar() {
//   const { data: session } = useSession(authOptions);
//   const [cargando, setCargando] = useState(true);

//   useEffect(() => {
//     setCargando(false);
//   }, [session]);

//   if (cargando) return <div>Cargando...</div>;

//   return (
//     <nav className="flex justify-between items-center bg-gray-950 text-white px-24 py-3">
//       <h1 className="text-xl font-bold">NextAuth</h1>
//       <ul className="flex gap-x-2">
//         {!session ? (
//           <>
//             <li>
//               <Link href="/">Inicio</Link>
//             </li>
//             <li>
//               <Link href="/auth/login">Iniciar sesión</Link>
//             </li>
//             <li>
//               <Link href="/auth/register">Registrarse</Link>
//             </li>
//           </>
//         ) : (
//           <>
//             <li>
//               <Link href="/dashboard">Tablero</Link>
//             </li>
//             <li>
//               <button onClick={() => signOut()}>Cerrar sesión</button>
//             </li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
>>>>>>> e97ba119f95cc2a4a1d71d1fdfca9f583490e8cc
