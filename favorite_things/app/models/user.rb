class User
    attr_reader :id, :username
    DB = PG.connect(host: "localhost", port: 5432, dbname: '')
    def initialize(opts)
        @id = opts["id"].to_i,
        @username = opts["username"]
    end

    def self.add
    end

    def self.find(id)
    end

    def self.create(opts)
    end

    def self.update(id, opts)
    end

    def self.delete(id)
    end
end
