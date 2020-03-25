import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    
    
  ],
  providers: [UserService],
})
export class SharedModule { }
