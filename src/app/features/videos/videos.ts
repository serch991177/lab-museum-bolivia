import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import {
  LAB_VIDEOS,
  LabVideo,
  VIDEO_CATEGORIES,
  VideoCategory
} from '../../data/videos.data';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './videos.html',
  styleUrl: './videos.scss'
})
export class Videos {
  categories: VideoCategory[] = VIDEO_CATEGORIES;

  selectedCategory: VideoCategory = 'Todos';

  videos: LabVideo[] = LAB_VIDEOS;

  constructor(private sanitizer: DomSanitizer) {}

  get filteredVideos(): LabVideo[] {
    if (this.selectedCategory === 'Todos') {
      return this.videos;
    }

    return this.videos.filter(video => video.category === this.selectedCategory);
  }

  get featuredVideo(): LabVideo | undefined {
    return this.videos.find(video => video.featured);
  }

  selectCategory(category: VideoCategory): void {
    this.selectedCategory = category;
  }

  getVideoUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }
}