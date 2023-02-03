import { Component, OnInit } from '@angular/core';
import { SideBarMenu } from './interface/menu.interface';
import { MenuBarService } from './services/menu-bar.service';
import { AuthService } from '../../core/services/auth/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  menuOptions :SideBarMenu[]=[]
  menuTop! : SideBarMenu;
  menuBottom! : SideBarMenu;

  constructor( private menuServices : MenuBarService,
               private authSerive : AuthService) { }

  ngOnInit(): void {
    this.menuOptions = this.menuServices.menuBar
    this.menuTop = this.menuServices.menuTop
    this.menuBottom = this.menuServices.menuBottom
  }


  logout(){
    this.authSerive.logout()
  }

}
