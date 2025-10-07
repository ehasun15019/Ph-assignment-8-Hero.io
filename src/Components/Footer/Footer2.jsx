import React from "react";

const Footer2 = () => {
  return (
    <div className="">
      <hr className="border-t border-gray-700 px-10" />
      <footer className="footer sm:footer-horizontal footer-center p-4 bg-[#001931] text-white">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer2;
