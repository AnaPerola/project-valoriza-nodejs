import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"

class ListUserReceiverComplimentService {
  async execute(user_id: string){
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories);

    const compliments = await complimentsRepositories.find({
      where: {
        user_receiver: user_id,
      },
      relations: ["userSerder", "userReceiver", "tag"]
    })

    return compliments
  }
}

export { ListUserReceiverComplimentService }