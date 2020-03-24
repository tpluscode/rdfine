import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export type DriveWheelConfigurationValue = NamedNode;

export default {
  AllWheelDriveConfiguration: schema.AllWheelDriveConfiguration,
  FourWheelDriveConfiguration: schema.FourWheelDriveConfiguration,
  FrontWheelDriveConfiguration: schema.FrontWheelDriveConfiguration,
  RearWheelDriveConfiguration: schema.RearWheelDriveConfiguration,
};
