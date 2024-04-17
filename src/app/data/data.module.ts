import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class DataModule {

  header_titel?: string
  title?: string
  apk_image?: string
  images?: Array<string>
  description?: string
  video_link?: string
  apk_link?: string

}
