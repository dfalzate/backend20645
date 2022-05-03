import express from 'express';


export class UserRoute extends express.Router{
  constructor() {
    super();
    
    this.post("/popular")
    this.get("/:id?")
    this.post("/")
    this.put("/:id")
    this.delete("/:id")
  }
}