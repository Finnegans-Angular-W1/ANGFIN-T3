import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title/service/title.service';
import { SideBarMenu } from './interface/menu.interface';
import { MenuBarService } from './services/menu-bar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  menuOptions :SideBarMenu[]=[]
  menuTop! : SideBarMenu;
  menuBottom! : SideBarMenu;

  constructor( 
    private menuServices : MenuBarService,
    private titleService : TitleService ) { }

  ngOnInit(): void {
    this.menuOptions = this.menuServices.menuBar
    this.menuTop = this.menuServices.menuTop
    this.menuBottom = this.menuServices.menuBottom
  }

  titleSend(title: string){

    this.titleService.setTitle({name: title})
  
  }
}
