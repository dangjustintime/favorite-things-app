class Thing
    # ==================================================
    #                      SET UP
    # ==================================================

    # add attribute readers for instance access
    attr_reader :id, :title, :image, :category, :description

    # connect to postgres
    # Database name blank for setup
    DB = PG.connect(host: "localhost", port: 5432, dbname: '')

    # initialize options hash
    def initialize(opts = {})
        @id = opts["id"].to_i
        @title = opts["title"]
        @image = opts["image"]
        @category= opts["category"]
        @description = opts["description"]
        #if company is in opts hash, show it
        if opts["user"]
          @user = opts["user"]
        end
    end

    # ==================================================
    #                      ROUTES
    # ==================================================

    # get all
    def self.all
      results = DB.exec(
          <<-SQL
              SELECT
                  things.*,
                  users.username
              FROM things
              LEFT JOIN companies
                  ON things.user_id = users.id
          SQL
      )
      return results.map do |result|
            if result["user_id"]
                user = User.new(
                    {
                        "id" => result["user_id"],
                        "username" => result["username"]
                    }
                )
            else
                user = nil
            end
            Thing.new(
                {
                    "id" => result["id"],
                    "title" => result["name"],
                    "image" => result["image"],
                    "user" => user,
                    "category" => result["category"],
                    "description" => result["description"]
                }
            )
        end
    end

    # get one by id
    def self.find(id)
        results = DB.exec(
            <<-SQL
                SELECT
                    things.*,
                    users.username
                FROM things
                LEFT JOIN users
                    ON things.user_id = users.id
                WHERE things.id=#{id};
            SQL
        )
        result = results.first
        if result["user_id"]
            user = User.new(
                {
                    "id" => result["user_id"],
                    "username" => result["username"]
                }
            )
        else
            user = nil
        end
        Thing.new(
            {
                "id" => result["id"],
                "title" => result["name"],
                "image" => result["image"],
                "user" => user,
                "category" => result["category"],
                "description" => result["description"]
            }
        )
        return thing
    end

    # create one
    def self.create(opts={})
      results = DB.exec(
          <<-SQL
              INSERT INTO things (title, image, category, description, user_id)
              VALUES (
                '#{opts["title"]}',
                 #{opts["image"]},
                 '#{opts["category"]}',
                 '#{opts["description"]}',
                #{opts["user_id"] ? opts["user_id"] : "NULL"} )
              RETURNING id, title, image, category, description, user_id;
          SQL
      )
      return Thing.new(results.first)
    end

    # delete one (by id)
    def self.delete(id)
      results = DB.exec("DELETE FROM things WHERE id=#{id};")
      return { deleted: true }
    end

    # update one (by id)
    def self.update(id, opts={})
      results = DB.exec(
          <<-SQL
              UPDATE things
              SET
               title='#{opts["title"]}',
               image=#{opts["image"]},
               category='#{opts["category"]}',
               description='#{opts["description"]}',
               company_id=#{opts["user_id"] ? opts["user_id"] : "NULL"}
              WHERE id=#{id}
              RETURNING id, title, image, category, description, user_id;
          SQL
      )
      return Thing.new(results.first)
    end

    # update company person belongs to
    def self.setUser(thing_id, user)
    results = DB.exec(
        <<-SQL
            UPDATE things
            SET user_id = #{user.id}
            WHERE id = #{thing_id}
            RETURNING id, username;
        SQL
    )
    return Thing.new(results.first)
  end

end
