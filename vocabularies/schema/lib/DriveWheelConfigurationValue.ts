import { schema } from './namespace';

const values = {
  AllWheelDriveConfiguration: schema.AllWheelDriveConfiguration,
  FourWheelDriveConfiguration: schema.FourWheelDriveConfiguration,
  FrontWheelDriveConfiguration: schema.FrontWheelDriveConfiguration,
  RearWheelDriveConfiguration: schema.RearWheelDriveConfiguration,
};

export type DriveWheelConfigurationValue = typeof values[keyof typeof values];

export default values;
