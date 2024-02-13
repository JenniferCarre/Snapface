import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'  
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://www.jennifer-carre.com/angular/archibald.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'Ma maison d\'enfance'
        },
        {
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les randonnées',
          imageUrl: 'https://www.jennifer-carre.com/angular/three-rock-mountain.jpg',
          createdDate: new Date(),
          snaps: 0
        },
        {
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          imageUrl: 'https://www.jennifer-carre.com/angular/un-bon-repas.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'Restaurant Le numéro 3 à Bédarrides'
        },
        {
          title: 'Plage de rêve',
          description: 'Des vacances bien méritées !',
          imageUrl: 'https://www.jennifer-carre.com/angular/plage.jpg',
          createdDate: new Date(),
          snaps: 255
        },
        {
          title: 'Quelle belle vue !',
          description: 'Une randonnée avec une vue exceptionnelle',
          imageUrl: 'https://www.jennifer-carre.com/angular/randonnee.jpg',
          createdDate: new Date(),
          snaps: 0
        }
      ];
}