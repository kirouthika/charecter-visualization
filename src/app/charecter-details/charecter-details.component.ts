import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-charecter-details',
  templateUrl: './charecter-details.component.html',
  styleUrl: './charecter-details.component.css'
})
export class CharecterDetailsComponent {
  characterId: any;
  character: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ){}
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    this.characterId = Number(routeParams.get('id'));
    this.getDetails()
  }

  getDetails(){
    this.apiService.getCharDetails(this.characterId).subscribe((data: any) => {
      console.log(data);
      this.character = data;
    })
  }

  goBack(){
    this.router.navigateByUrl('characters')
  }
}
