// src/lib/presentations.ts

export interface Presentation {
  title: string;
  date: string;
  venue: string;
  description: string;
  slides: string;
}

export interface PresentationsData {
  scientific: Presentation[];
  misc: Presentation[];
}

// Presentations data - updated with actual data from presentations.yaml
export const presentations: PresentationsData = {
  scientific: [
    // No scientific presentations yet
  ],
  misc: [
    {
      title: "Retour d'expérience sur les auditions en tant que jeune Maître de Conférences",
      date: "2024-04-17",
      venue: "Séminaire mentoring - GDR RSD",
      description: "Comment préparer son audition pour le concours Maître de Conférences",
      slides: "https://seafile.unistra.fr/f/e43c5bbafa814743b047/"
    }
  ]
};

// Helper function to get all presentations sorted by date (newest first)
export const getAllPresentations = (): Presentation[] => {
  const allPresentations = [
    ...presentations.scientific,
    ...presentations.misc
  ];
  
  return allPresentations.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
};

// Helper function to format date
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};
