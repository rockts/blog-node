class BaseModel {
  constructor(data, message) {
    if (typeof data === "string") {
      this.message = data;
    }
  }
}
