import React from "react";

function Header() {
  return (
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">List</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Add note</a></li>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control " placeholder="Search..." aria-label="Search"></input>
        </form>
      </ul>
    </header>
  );
}
export default Header;