export interface TeamMember {
  id: string;
  name: string;
  specialty: string;
  crm: string;
  photo: string;
  description?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Roberto Carlei',
    specialty: 'Oftalmologista',
    crm: 'CRM 5071',
    photo: '/images/team/dra-tais.jpg',
    description: 'Especialista em Córnea, Catarata e Cirurgia Refrativa',
  },
  {
    id: '2',
    name: 'Dra. Taís Rocha',
    specialty: 'Oftalmologista',
    crm: 'CRM-PA 9447',
    photo: '/images/team/dr-roberto.jpg',
    description: 'Especialista em córnea e neuroftalmologia',
  },
  {
    id: '3',
    name: 'Dr. Taurino Neto',
    specialty: 'Oftalmologista',
    crm: 'CRM 11098',
    photo: '/images/team/dr-taurino.png',
    description: 'Especialista em retina, vítreo e glaucoma',
  },
  {
    id: '4',
    name: 'Dra. Mônica Alves',
    specialty: 'Oftalmologista',
    crm: 'CRM 6517',
    photo: '/images/team/dra-monica.png',
    description: 'Especialista em glaucoma, estrabismo, visão subnormal, e oftalmopediatria',
  },
  {
    id: '5',
    name: 'Dr. Geraldo Carvalho',
    specialty: 'Oftalmologista',
    crm: 'CRM 9692',
    photo: '/images/team/dra-ana.jpg',
    description: 'Especialista em retina, vítreo e ultrassom ocular',
  },
  {
    id: '6',
    name: 'Dra. Ana  Rodrigues',
    specialty: 'Oftalmologista',
    crm: 'CRM 8278',
    photo: '/images/team/dr-geraldo.jpg',
    description: 'Especialista em glaucoma clínico e cirúrgico',
  },
  {
    id: '7',
    name: 'Dr. Joacy David',
    specialty: 'Oftalmologista',
    crm: 'CRM 14662',
    photo: '/images/team/dr-joacy.png',
    description: 'Especialista em Retina, Uveítes e Oncologia Ocular',
  },
  {
    id: '8',
    name: 'Dr. Armando Vidonho',
    specialty: 'Oftalmologista',
    crm: 'CRM 4665',
    photo: '/images/team/dr-armando.png',
    description: 'Especialista em córnea, catarata e cirurgia refrativa',
  },
];
