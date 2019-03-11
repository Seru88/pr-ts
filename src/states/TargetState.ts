// export default class TargetState {
//   public transform = {
//     position: { x: 0, y: 0, z: -5 },
//     rotation: { x: 0, y: 0, z: 0 },
//     scale: { x: 0, y: 0, z: 0 },
//   };
//   public physcialWidth = 0;
//   public asset = {
//     fileName: '',
//     uuid: '',
//     source: '',
//     color: 'red',
//   };
// }

export interface ITargetState {
  transform: {
    position: { x: number; y: number; z: number };
    rotation: { x: number; y: number; z: number };
    scale: { x: number; y: number; z: number };
  };
  physcialWidth: number;
  asset: {
    fileName: string;
    uuid: string;
    source: string;
    color?: string;
  };
}
