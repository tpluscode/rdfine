import { NamedNode } from 'rdf-js';
import { schema } from './lib/namespace';

export default {
  Anesthesia: schema.Anesthesia as NamedNode<'http://schema.org/Anesthesia'>,
  Cardiovascular: schema.Cardiovascular as NamedNode<'http://schema.org/Cardiovascular'>,
  CommunityHealth: schema.CommunityHealth as NamedNode<'http://schema.org/CommunityHealth'>,
  Dentistry: schema.Dentistry as NamedNode<'http://schema.org/Dentistry'>,
  Dermatologic: schema.Dermatologic as NamedNode<'http://schema.org/Dermatologic'>,
  Dermatology: schema.Dermatology as NamedNode<'http://schema.org/Dermatology'>,
  DietNutrition: schema.DietNutrition as NamedNode<'http://schema.org/DietNutrition'>,
  Emergency: schema.Emergency as NamedNode<'http://schema.org/Emergency'>,
  Endocrine: schema.Endocrine as NamedNode<'http://schema.org/Endocrine'>,
  Gastroenterologic: schema.Gastroenterologic as NamedNode<'http://schema.org/Gastroenterologic'>,
  Genetic: schema.Genetic as NamedNode<'http://schema.org/Genetic'>,
  Geriatric: schema.Geriatric as NamedNode<'http://schema.org/Geriatric'>,
  Gynecologic: schema.Gynecologic as NamedNode<'http://schema.org/Gynecologic'>,
  Hematologic: schema.Hematologic as NamedNode<'http://schema.org/Hematologic'>,
  Infectious: schema.Infectious as NamedNode<'http://schema.org/Infectious'>,
  LaboratoryScience: schema.LaboratoryScience as NamedNode<'http://schema.org/LaboratoryScience'>,
  Midwifery: schema.Midwifery as NamedNode<'http://schema.org/Midwifery'>,
  Musculoskeletal: schema.Musculoskeletal as NamedNode<'http://schema.org/Musculoskeletal'>,
  Neurologic: schema.Neurologic as NamedNode<'http://schema.org/Neurologic'>,
  Nursing: schema.Nursing as NamedNode<'http://schema.org/Nursing'>,
  Obstetric: schema.Obstetric as NamedNode<'http://schema.org/Obstetric'>,
  Oncologic: schema.Oncologic as NamedNode<'http://schema.org/Oncologic'>,
  Optometric: schema.Optometric as NamedNode<'http://schema.org/Optometric'>,
  Otolaryngologic: schema.Otolaryngologic as NamedNode<'http://schema.org/Otolaryngologic'>,
  Pathology: schema.Pathology as NamedNode<'http://schema.org/Pathology'>,
  Pediatric: schema.Pediatric as NamedNode<'http://schema.org/Pediatric'>,
  PharmacySpecialty: schema.PharmacySpecialty as NamedNode<'http://schema.org/PharmacySpecialty'>,
  Physiotherapy: schema.Physiotherapy as NamedNode<'http://schema.org/Physiotherapy'>,
  PlasticSurgery: schema.PlasticSurgery as NamedNode<'http://schema.org/PlasticSurgery'>,
  Podiatric: schema.Podiatric as NamedNode<'http://schema.org/Podiatric'>,
  PrimaryCare: schema.PrimaryCare as NamedNode<'http://schema.org/PrimaryCare'>,
  Psychiatric: schema.Psychiatric as NamedNode<'http://schema.org/Psychiatric'>,
  PublicHealth: schema.PublicHealth as NamedNode<'http://schema.org/PublicHealth'>,
  Pulmonary: schema.Pulmonary as NamedNode<'http://schema.org/Pulmonary'>,
  Radiography: schema.Radiography as NamedNode<'http://schema.org/Radiography'>,
  Renal: schema.Renal as NamedNode<'http://schema.org/Renal'>,
  RespiratoryTherapy: schema.RespiratoryTherapy as NamedNode<'http://schema.org/RespiratoryTherapy'>,
  Rheumatologic: schema.Rheumatologic as NamedNode<'http://schema.org/Rheumatologic'>,
  SpeechPathology: schema.SpeechPathology as NamedNode<'http://schema.org/SpeechPathology'>,
  Surgical: schema.Surgical as NamedNode<'http://schema.org/Surgical'>,
  Toxicologic: schema.Toxicologic as NamedNode<'http://schema.org/Toxicologic'>,
  Urologic: schema.Urologic as NamedNode<'http://schema.org/Urologic'>,
};

export type MedicalSpecialty =
  NamedNode<'http://schema.org/Anesthesia'>
  | NamedNode<'http://schema.org/Cardiovascular'>
  | NamedNode<'http://schema.org/CommunityHealth'>
  | NamedNode<'http://schema.org/Dentistry'>
  | NamedNode<'http://schema.org/Dermatologic'>
  | NamedNode<'http://schema.org/Dermatology'>
  | NamedNode<'http://schema.org/DietNutrition'>
  | NamedNode<'http://schema.org/Emergency'>
  | NamedNode<'http://schema.org/Endocrine'>
  | NamedNode<'http://schema.org/Gastroenterologic'>
  | NamedNode<'http://schema.org/Genetic'>
  | NamedNode<'http://schema.org/Geriatric'>
  | NamedNode<'http://schema.org/Gynecologic'>
  | NamedNode<'http://schema.org/Hematologic'>
  | NamedNode<'http://schema.org/Infectious'>
  | NamedNode<'http://schema.org/LaboratoryScience'>
  | NamedNode<'http://schema.org/Midwifery'>
  | NamedNode<'http://schema.org/Musculoskeletal'>
  | NamedNode<'http://schema.org/Neurologic'>
  | NamedNode<'http://schema.org/Nursing'>
  | NamedNode<'http://schema.org/Obstetric'>
  | NamedNode<'http://schema.org/Oncologic'>
  | NamedNode<'http://schema.org/Optometric'>
  | NamedNode<'http://schema.org/Otolaryngologic'>
  | NamedNode<'http://schema.org/Pathology'>
  | NamedNode<'http://schema.org/Pediatric'>
  | NamedNode<'http://schema.org/PharmacySpecialty'>
  | NamedNode<'http://schema.org/Physiotherapy'>
  | NamedNode<'http://schema.org/PlasticSurgery'>
  | NamedNode<'http://schema.org/Podiatric'>
  | NamedNode<'http://schema.org/PrimaryCare'>
  | NamedNode<'http://schema.org/Psychiatric'>
  | NamedNode<'http://schema.org/PublicHealth'>
  | NamedNode<'http://schema.org/Pulmonary'>
  | NamedNode<'http://schema.org/Radiography'>
  | NamedNode<'http://schema.org/Renal'>
  | NamedNode<'http://schema.org/RespiratoryTherapy'>
  | NamedNode<'http://schema.org/Rheumatologic'>
  | NamedNode<'http://schema.org/SpeechPathology'>
  | NamedNode<'http://schema.org/Surgical'>
  | NamedNode<'http://schema.org/Toxicologic'>
  | NamedNode<'http://schema.org/Urologic'>;
