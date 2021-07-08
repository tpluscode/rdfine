import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  BodyMeasurementArm: schema.BodyMeasurementArm as NamedNode<'http://schema.org/BodyMeasurementArm'>,
  BodyMeasurementBust: schema.BodyMeasurementBust as NamedNode<'http://schema.org/BodyMeasurementBust'>,
  BodyMeasurementChest: schema.BodyMeasurementChest as NamedNode<'http://schema.org/BodyMeasurementChest'>,
  BodyMeasurementFoot: schema.BodyMeasurementFoot as NamedNode<'http://schema.org/BodyMeasurementFoot'>,
  BodyMeasurementHand: schema.BodyMeasurementHand as NamedNode<'http://schema.org/BodyMeasurementHand'>,
  BodyMeasurementHead: schema.BodyMeasurementHead as NamedNode<'http://schema.org/BodyMeasurementHead'>,
  BodyMeasurementHeight: schema.BodyMeasurementHeight as NamedNode<'http://schema.org/BodyMeasurementHeight'>,
  BodyMeasurementHips: schema.BodyMeasurementHips as NamedNode<'http://schema.org/BodyMeasurementHips'>,
  BodyMeasurementInsideLeg: schema.BodyMeasurementInsideLeg as NamedNode<'http://schema.org/BodyMeasurementInsideLeg'>,
  BodyMeasurementNeck: schema.BodyMeasurementNeck as NamedNode<'http://schema.org/BodyMeasurementNeck'>,
  BodyMeasurementUnderbust: schema.BodyMeasurementUnderbust as NamedNode<'http://schema.org/BodyMeasurementUnderbust'>,
  BodyMeasurementWaist: schema.BodyMeasurementWaist as NamedNode<'http://schema.org/BodyMeasurementWaist'>,
  BodyMeasurementWeight: schema.BodyMeasurementWeight as NamedNode<'http://schema.org/BodyMeasurementWeight'>,
};

export type BodyMeasurementTypeEnumeration =
  NamedNode<'http://schema.org/BodyMeasurementArm'>
  | NamedNode<'http://schema.org/BodyMeasurementBust'>
  | NamedNode<'http://schema.org/BodyMeasurementChest'>
  | NamedNode<'http://schema.org/BodyMeasurementFoot'>
  | NamedNode<'http://schema.org/BodyMeasurementHand'>
  | NamedNode<'http://schema.org/BodyMeasurementHead'>
  | NamedNode<'http://schema.org/BodyMeasurementHeight'>
  | NamedNode<'http://schema.org/BodyMeasurementHips'>
  | NamedNode<'http://schema.org/BodyMeasurementInsideLeg'>
  | NamedNode<'http://schema.org/BodyMeasurementNeck'>
  | NamedNode<'http://schema.org/BodyMeasurementUnderbust'>
  | NamedNode<'http://schema.org/BodyMeasurementWaist'>
  | NamedNode<'http://schema.org/BodyMeasurementWeight'>;
