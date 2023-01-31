import { Component } from '@angular/core';
import { AuthGuard } from 'src/app/core/auth.guard';

@Component({
  selector: 'app-router-banner',
  templateUrl: './router-banner.component.html',
  styleUrls: ['./router-banner.component.scss']
})
export class RouterBannerComponent {
  role = localStorage.getItem('role');
  
}
