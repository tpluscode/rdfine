import { NamedNode } from 'rdf-js';
import { schema } from './namespace';

export default {
  BenefitsHealthAspect: schema.BenefitsHealthAspect as NamedNode<'http://schema.org/BenefitsHealthAspect'>,
  CausesHealthAspect: schema.CausesHealthAspect as NamedNode<'http://schema.org/CausesHealthAspect'>,
  ContagiousnessHealthAspect: schema.ContagiousnessHealthAspect as NamedNode<'http://schema.org/ContagiousnessHealthAspect'>,
  HowOrWhereHealthAspect: schema.HowOrWhereHealthAspect as NamedNode<'http://schema.org/HowOrWhereHealthAspect'>,
  LivingWithHealthAspect: schema.LivingWithHealthAspect as NamedNode<'http://schema.org/LivingWithHealthAspect'>,
  MayTreatHealthAspect: schema.MayTreatHealthAspect as NamedNode<'http://schema.org/MayTreatHealthAspect'>,
  MisconceptionsHealthAspect: schema.MisconceptionsHealthAspect as NamedNode<'http://schema.org/MisconceptionsHealthAspect'>,
  OverviewHealthAspect: schema.OverviewHealthAspect as NamedNode<'http://schema.org/OverviewHealthAspect'>,
  PatientExperienceHealthAspect: schema.PatientExperienceHealthAspect as NamedNode<'http://schema.org/PatientExperienceHealthAspect'>,
  PreventionHealthAspect: schema.PreventionHealthAspect as NamedNode<'http://schema.org/PreventionHealthAspect'>,
  PrognosisHealthAspect: schema.PrognosisHealthAspect as NamedNode<'http://schema.org/PrognosisHealthAspect'>,
  RelatedTopicsHealthAspect: schema.RelatedTopicsHealthAspect as NamedNode<'http://schema.org/RelatedTopicsHealthAspect'>,
  RisksOrComplicationsHealthAspect: schema.RisksOrComplicationsHealthAspect as NamedNode<'http://schema.org/RisksOrComplicationsHealthAspect'>,
  ScreeningHealthAspect: schema.ScreeningHealthAspect as NamedNode<'http://schema.org/ScreeningHealthAspect'>,
  SeeDoctorHealthAspect: schema.SeeDoctorHealthAspect as NamedNode<'http://schema.org/SeeDoctorHealthAspect'>,
  SelfCareHealthAspect: schema.SelfCareHealthAspect as NamedNode<'http://schema.org/SelfCareHealthAspect'>,
  SideEffectsHealthAspect: schema.SideEffectsHealthAspect as NamedNode<'http://schema.org/SideEffectsHealthAspect'>,
  StagesHealthAspect: schema.StagesHealthAspect as NamedNode<'http://schema.org/StagesHealthAspect'>,
  SymptomsHealthAspect: schema.SymptomsHealthAspect as NamedNode<'http://schema.org/SymptomsHealthAspect'>,
  TreatmentsHealthAspect: schema.TreatmentsHealthAspect as NamedNode<'http://schema.org/TreatmentsHealthAspect'>,
  TypesHealthAspect: schema.TypesHealthAspect as NamedNode<'http://schema.org/TypesHealthAspect'>,
  UsageOrScheduleHealthAspect: schema.UsageOrScheduleHealthAspect as NamedNode<'http://schema.org/UsageOrScheduleHealthAspect'>,
};

export type HealthAspectEnumeration = 
  NamedNode<'http://schema.org/BenefitsHealthAspect'>
  | NamedNode<'http://schema.org/CausesHealthAspect'>
  | NamedNode<'http://schema.org/ContagiousnessHealthAspect'>
  | NamedNode<'http://schema.org/HowOrWhereHealthAspect'>
  | NamedNode<'http://schema.org/LivingWithHealthAspect'>
  | NamedNode<'http://schema.org/MayTreatHealthAspect'>
  | NamedNode<'http://schema.org/MisconceptionsHealthAspect'>
  | NamedNode<'http://schema.org/OverviewHealthAspect'>
  | NamedNode<'http://schema.org/PatientExperienceHealthAspect'>
  | NamedNode<'http://schema.org/PreventionHealthAspect'>
  | NamedNode<'http://schema.org/PrognosisHealthAspect'>
  | NamedNode<'http://schema.org/RelatedTopicsHealthAspect'>
  | NamedNode<'http://schema.org/RisksOrComplicationsHealthAspect'>
  | NamedNode<'http://schema.org/ScreeningHealthAspect'>
  | NamedNode<'http://schema.org/SeeDoctorHealthAspect'>
  | NamedNode<'http://schema.org/SelfCareHealthAspect'>
  | NamedNode<'http://schema.org/SideEffectsHealthAspect'>
  | NamedNode<'http://schema.org/StagesHealthAspect'>
  | NamedNode<'http://schema.org/SymptomsHealthAspect'>
  | NamedNode<'http://schema.org/TreatmentsHealthAspect'>
  | NamedNode<'http://schema.org/TypesHealthAspect'>
  | NamedNode<'http://schema.org/UsageOrScheduleHealthAspect'>;
