import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  AllWheelDriveConfiguration: schema.AllWheelDriveConfiguration as NamedNode<'http://schema.org/AllWheelDriveConfiguration'>,
  FourWheelDriveConfiguration: schema.FourWheelDriveConfiguration as NamedNode<'http://schema.org/FourWheelDriveConfiguration'>,
  FrontWheelDriveConfiguration: schema.FrontWheelDriveConfiguration as NamedNode<'http://schema.org/FrontWheelDriveConfiguration'>,
  RearWheelDriveConfiguration: schema.RearWheelDriveConfiguration as NamedNode<'http://schema.org/RearWheelDriveConfiguration'>,
};

export type DriveWheelConfigurationValue =
  NamedNode<'http://schema.org/AllWheelDriveConfiguration'>
  | NamedNode<'http://schema.org/FourWheelDriveConfiguration'>
  | NamedNode<'http://schema.org/FrontWheelDriveConfiguration'>
  | NamedNode<'http://schema.org/RearWheelDriveConfiguration'>;
