import { Component } from '@angular/core';

import { OwlOptions } from 'ngx-owl-carousel-o/public_api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  slidesStore: any []=[
    {
      id: 1,
      img: "../../../../assets/img/carousel-1.jpg",
      title: "échange de livres",
      description: " Joignez-vous à notre communauté éducative dédiée à l'apprentissage, à l'entraide et à la réussite, tout en économisant de l'argent grâce à l'échange de livres entre parents"
    },
    {
      id: 2,
      img: "../../../../assets/img/carousel-2.jpg",
      title: "Fourniture Scolaires",
      description: "En plus des fournitures de base, nous proposons une gamme d'équipement scolaire, des sacs à dos fonctionnels aux calculatrices scientifiques avancées."
    },
    {
      id: 3,
      img: "../../../../assets/img/carousel-2.jpg",
      title: "Pack Niveaux Scolaires",
      description: "Découvrez une variété de packs de fournitures soigneusement conçus pour chaque niveau scolaire."
    },
    
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }

}
