import { schema } from './namespace.js';

const values = {
  Anesthesia: schema.Anesthesia,
  Cardiovascular: schema.Cardiovascular,
  CommunityHealth: schema.CommunityHealth,
  Dentistry: schema.Dentistry,
  Dermatologic: schema.Dermatologic,
  Dermatology: schema.Dermatology,
  DietNutrition: schema.DietNutrition,
  Emergency: schema.Emergency,
  Endocrine: schema.Endocrine,
  Gastroenterologic: schema.Gastroenterologic,
  Genetic: schema.Genetic,
  Geriatric: schema.Geriatric,
  Gynecologic: schema.Gynecologic,
  Hematologic: schema.Hematologic,
  Infectious: schema.Infectious,
  LaboratoryScience: schema.LaboratoryScience,
  Midwifery: schema.Midwifery,
  Musculoskeletal: schema.Musculoskeletal,
  Neurologic: schema.Neurologic,
  Nursing: schema.Nursing,
  Obstetric: schema.Obstetric,
  Oncologic: schema.Oncologic,
  Optometric: schema.Optometric,
  Otolaryngologic: schema.Otolaryngologic,
  Pathology: schema.Pathology,
  Pediatric: schema.Pediatric,
  PharmacySpecialty: schema.PharmacySpecialty,
  Physiotherapy: schema.Physiotherapy,
  PlasticSurgery: schema.PlasticSurgery,
  Podiatric: schema.Podiatric,
  PrimaryCare: schema.PrimaryCare,
  Psychiatric: schema.Psychiatric,
  PublicHealth: schema.PublicHealth,
  Pulmonary: schema.Pulmonary,
  Radiography: schema.Radiography,
  Renal: schema.Renal,
  RespiratoryTherapy: schema.RespiratoryTherapy,
  Rheumatologic: schema.Rheumatologic,
  SpeechPathology: schema.SpeechPathology,
  Surgical: schema.Surgical,
  Toxicologic: schema.Toxicologic,
  Urologic: schema.Urologic,
};

export type MedicalSpecialty = typeof values[keyof typeof values];

export default values;
