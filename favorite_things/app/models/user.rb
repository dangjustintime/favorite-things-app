class User
  DB = PG.connect(
    host: "localhost",
    port: 5432,
    dbname: 'favorite_things_development'
  )
  def self.all
    results = DB.exec("SELECT * FROM users");
    return results.map do |result|
    {
      "id" => result["id"].to_i,
      "username" => result["username"],
      "password" => result["password"]
    }
    end
  end

  def self.find(id)
    results = DB.exec("SELECT * FROM users WHERE users.id=#{id}");
    return {
      "id" => results.first["id"].to_i,
      "username" => results.first["username"],
      "password" => results.first["password"]
    }
  end

  def self.create(opts)
    results = DB.exec(
      <<-SQL
        INSERT INTO users (username, password)
        VALUES ('#{opts["username"]}', '#{opts["password"]}')
        RETURNING id, username, password
      SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "username" => results.first["username"],
      "password" => results.first["password"]
    }
  end

  def self.update(id, opts)
    results = DB.exec(
      <<-SQL
        UPDATE users
        SET
          username='#{opts["username"]}',
          password='#{opts["password"]}'
        WHERE id=#{id}
        RETURNING id, username, password
      SQL
    )
    return {
      "id" => results.first["id"].to_i,
      "username" => results.first["username"],
      "password" => results.first["password"]
    }
  end

  def self.delete(id)
    results = DB.exec("DELETE FROM users WHERE id=#{id};")
    return { "deleted" => true }
  end
end
