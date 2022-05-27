export class ErrorResponse {

  statusCode: number
  message: string | null
  error: string

  constructor(statusCode: number, message: string | null = null, error: string) {
    this.statusCode = statusCode
    this.message = message
    this.error = error  
  }
}