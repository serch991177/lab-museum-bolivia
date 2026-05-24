import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  GALLERY_CATEGORIES,
  GalleryCategory,
  GalleryImage,
  LAB_GALLERY
} from '../../data/gallery.data';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  categories: GalleryCategory[] = GALLERY_CATEGORIES;

  selectedCategory: GalleryCategory = 'Todos';

  images: GalleryImage[] = LAB_GALLERY;

  selectedImage: GalleryImage | null = null;

  get filteredImages(): GalleryImage[] {
    if (this.selectedCategory === 'Todos') {
      return this.images;
    }

    return this.images.filter(image => image.category === this.selectedCategory);
  }

  selectCategory(category: GalleryCategory): void {
    this.selectedCategory = category;
  }

  openImage(image: GalleryImage): void {
    this.selectedImage = image;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}