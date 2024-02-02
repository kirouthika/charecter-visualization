import { Component } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charecter-list',
  templateUrl: './charecter-list.component.html',
  styleUrl: './charecter-list.component.css'
})
export class CharecterListComponent {

  title = 'cv';
  list: any;  
  displayedColumns: string[] = ['position', 'name', 'profile'];
  id: any; 
  constructor(
    private apiService: ApiService,
    private router: Router) {}
    
  ngOnInit(){
    this.getList();
  }
  getList(){
    this.apiService.getCharList().subscribe((response) =>{
      this.list = Object.values(response)[1];
    })
  }
  charDetails(profile:any){
    this.id = profile.id;
    this.router.navigate(['/characterDetails',  this.id]);
  }
}
