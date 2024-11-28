const { ObjectId } = require('mongodb'); // Importação do ObjectId


function addIdToUser(user) {
        const { _id, ...rest } = user;  // Extrai _id e o resto do objeto
        return { ...rest, id: _id }; // Mantém o _id como ObjectId e adiciona o campo id
}



class UserRepository {

        constructor(collection) {
                this.collection = collection
        }

        async findOneByEmail(email) {

                const user = await this.collection.findOne({ email });

                if (user === null) {
                        throw new Error(`User with email ${email} does not exist`)
                }

                return addIdToUser(user);
        }

        async findOneById(id) {

                const user = await this.collection.findOne({ _id: id });

                if (user === null) {
                        throw new Error(`User with id ${id} does not exist`)
                }

                return addIdToUser(user);
        }

        async insert(user) {
                await this.collection.insertOne(user)
                return addIdToUser(user);
        }

        async update(id, data) {
                console.log("ID recebido no método update:", id);
                console.log("Data recebido no método update:", data);

                const existingUser = await this.collection.findOne({ _id: id });
                console.log("Documento encontrado antes do update:", existingUser);

                const result = await this.collection.findOneAndUpdate(
                        { _id: id },
                        { $set: data },
                        { returnDocument: "after" }
                );
                console.log("Resultado do findOneAndUpdate:", result);

                if (!result.value) {
                        throw new Error(`User with id ${id} was not found`);
                }

                return addIdToUser(result.value);
        }



        async delete(id) {
                const result = await this.collection.deleteOne({ _id: id });

                if (result.deletedCount === 0) { // Validação mantida
                        throw new Error(`User with id ${id} does not exist`);
                }
        }

        async findAll() {
                const users = await this.collection.find().toArray()
                return users.map(addIdToUser)
        }

        async deleteAll() {
                await this.collection.deleteMany({})
        }
}

module.exports = UserRepository