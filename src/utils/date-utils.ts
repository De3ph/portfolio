export function formatDate(dateString: string): string {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    })
  }
  
  export function formatDateRange(startDate: string, endDate?: string): string {
    const start = formatDate(startDate)
    const end = endDate ? formatDate(endDate) : "Present"
    return `${start} - ${end}`
  }
  
  export function calculateDuration(startDate: string, endDate?: string): string {
    const start = new Date(startDate)
    const end = endDate ? new Date(endDate) : new Date()
  
    const diffTime = Math.abs(end.getTime() - start.getTime())
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30.44))
  
    const years = Math.floor(diffMonths / 12)
    const months = diffMonths % 12
  
    if (years === 0) {
      return `${months} month${months !== 1 ? "s" : ""}`
    } else if (months === 0) {
      return `${years} year${years !== 1 ? "s" : ""}`
    } else {
      return `${years} year${years !== 1 ? "s" : ""}, ${months} month${months !== 1 ? "s" : ""}`
    }
  }
  