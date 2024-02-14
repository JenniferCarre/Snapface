import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
  providedIn: 'root'  
})
export class FaceSnapsService {
    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          imageUrl: 'https://www.jennifer-carre.com/angular/archibald.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'Ma maison d\'enfance'
        },
        {
          id: 2,
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les randonnées',
          imageUrl: 'https://www.jennifer-carre.com/angular/three-rock-mountain.jpg',
          createdDate: new Date(),
          snaps: 0
        },
        {
          id: 3,
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          imageUrl: 'https://www.jennifer-carre.com/angular/un-bon-repas.jpg',
          createdDate: new Date(),
          snaps: 0,
          location: 'Restaurant Le numéro 3 à Bédarrides'
        },
        {
          id: 4,
          title: 'Plage de rêve',
          description: 'Des vacances bien méritées !',
          imageUrl: 'https://www.jennifer-carre.com/angular/plage.jpg',
          createdDate: new Date(),
          snaps: 255
        },
        {
          id: 5,
          title: 'Quelle belle vue !',
          description: 'Une randonnée avec une vue exceptionnelle',
          imageUrl: 'https://www.jennifer-carre.com/angular/randonnee.jpg',
          createdDate: new Date(),
          snaps: 0
        }
      ];

      getAllFaceSnaps(): FaceSnap[] {
        return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap {
        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
        if (!faceSnap) {
          throw new Error ('FaceSnap not found!');
        } else {
          return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }

}