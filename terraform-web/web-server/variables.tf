variable "ami-id" {
  type = string
}
variable "instance-type" {
  default = "t2.micro"
  type    = string
}
variable "name" {
  type = string
}
variable "key-pair" {
  type = string
}
variable "subnet-id" {
  default = ""
  type    = string
}
variable "vpc-security-group-ids" {
  default = []
  type    = list(string)
}
