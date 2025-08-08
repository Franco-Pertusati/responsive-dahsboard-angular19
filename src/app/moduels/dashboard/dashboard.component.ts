import { Component } from '@angular/core';
import { ButtonComponent } from "../shared/ui/button/button.component";
import { CardComponent } from "../shared/ui/card/card.component";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [ButtonComponent, NgClass, CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  isSidebarOpen: boolean = false

  sidebarBtns = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
    },
    {
      label: 'Analytics',
      icon: 'insights',
    },
    {
      label: 'Reports',
      icon: 'bar_chart',
    },
    {
      label: 'Users',
      icon: 'group',
    },
    {
      label: 'Settings',
      icon: 'settings',
    },
    {
      label: 'Notifications',
      icon: 'notifications',
    },
    {
      label: 'Messages',
      icon: 'mail',
    },
    {
      label: 'Tasks',
      icon: 'check_circle',
    },
    {
      label: 'Calendar',
      icon: 'calendar_today',
    },
    {
      label: 'Support',
      icon: 'support_agent',
    }
  ];
}
