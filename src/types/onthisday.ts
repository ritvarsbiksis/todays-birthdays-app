interface WikiPageSummary {
  titles: {
    canonical: string
    normalized: string
    display: string
  }
  description: string
}

interface Onthisday {
  text: string
  pages: WikiPageSummary[]
  year: number
}

export interface BirthsResponse {
  births: Onthisday[]
}
