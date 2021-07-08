import { NamedNode } from '@rdfjs/types';
import { schema } from './namespace';

export default {
  WearableMeasurementBack: schema.WearableMeasurementBack as NamedNode<'http://schema.org/WearableMeasurementBack'>,
  WearableMeasurementChestOrBust: schema.WearableMeasurementChestOrBust as NamedNode<'http://schema.org/WearableMeasurementChestOrBust'>,
  WearableMeasurementCollar: schema.WearableMeasurementCollar as NamedNode<'http://schema.org/WearableMeasurementCollar'>,
  WearableMeasurementCup: schema.WearableMeasurementCup as NamedNode<'http://schema.org/WearableMeasurementCup'>,
  WearableMeasurementHeight: schema.WearableMeasurementHeight as NamedNode<'http://schema.org/WearableMeasurementHeight'>,
  WearableMeasurementHips: schema.WearableMeasurementHips as NamedNode<'http://schema.org/WearableMeasurementHips'>,
  WearableMeasurementInseam: schema.WearableMeasurementInseam as NamedNode<'http://schema.org/WearableMeasurementInseam'>,
  WearableMeasurementLength: schema.WearableMeasurementLength as NamedNode<'http://schema.org/WearableMeasurementLength'>,
  WearableMeasurementOutsideLeg: schema.WearableMeasurementOutsideLeg as NamedNode<'http://schema.org/WearableMeasurementOutsideLeg'>,
  WearableMeasurementSleeve: schema.WearableMeasurementSleeve as NamedNode<'http://schema.org/WearableMeasurementSleeve'>,
  WearableMeasurementWaist: schema.WearableMeasurementWaist as NamedNode<'http://schema.org/WearableMeasurementWaist'>,
  WearableMeasurementWidth: schema.WearableMeasurementWidth as NamedNode<'http://schema.org/WearableMeasurementWidth'>,
};

export type WearableMeasurementTypeEnumeration =
  NamedNode<'http://schema.org/WearableMeasurementBack'>
  | NamedNode<'http://schema.org/WearableMeasurementChestOrBust'>
  | NamedNode<'http://schema.org/WearableMeasurementCollar'>
  | NamedNode<'http://schema.org/WearableMeasurementCup'>
  | NamedNode<'http://schema.org/WearableMeasurementHeight'>
  | NamedNode<'http://schema.org/WearableMeasurementHips'>
  | NamedNode<'http://schema.org/WearableMeasurementInseam'>
  | NamedNode<'http://schema.org/WearableMeasurementLength'>
  | NamedNode<'http://schema.org/WearableMeasurementOutsideLeg'>
  | NamedNode<'http://schema.org/WearableMeasurementSleeve'>
  | NamedNode<'http://schema.org/WearableMeasurementWaist'>
  | NamedNode<'http://schema.org/WearableMeasurementWidth'>;
