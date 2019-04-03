import * as mongoose from 'mongoose'

export interface Client extends mongoose.Document {
  name: string 
  cpf: string   
}

const clientSchema = new mongoose.Schema({  
    name: {
      type: String,
      required: true,
      maxlength: 100
    },
    cpf: {
        type: String,
        required: true,
        maxlength: 11
      }     
  })
  
  
  export const Client = mongoose.model<Client>('Client', clientSchema)