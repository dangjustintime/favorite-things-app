class ThingsController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render json: Thing.all
    end
    def show
        render json: Thing.find(params["id"])
    end
    def create
        render json: Thing.create(params["thing"])
    end
    def delete
        render json: Thing.delete(params["id"])
    end
    def update
        render json: Thing.update(params["id"], params["thing"])
    end
end
