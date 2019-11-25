import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ChatPageComponent } from './chat-page/chat-page.component';

const routes: Routes = [
  { path: "", redirectTo: "chat", pathMatch: "full" },
  { path: "chat", component: ChatPageComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
