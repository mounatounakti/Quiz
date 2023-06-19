import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sidebar: HTMLElement | null | undefined;
  sidebarLockBtn: HTMLElement | null | undefined;

  constructor() { }

  ngOnInit() {
    const toggleIcon = document.getElementById("toggleSidebar") as HTMLElement | null;
    const sidebar = document.querySelector(".sidebar") as HTMLElement | null;

    if (toggleIcon && sidebar) {
      toggleIcon.addEventListener("click", () => {
        sidebar.classList.toggle("close");
      });
    }


  }}
