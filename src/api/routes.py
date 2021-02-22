"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend"
    }

    return jsonify(response_body), 200

####################################

@api.route('/users', methods=['POST', 'GET'])
def handle_users():

    response_body = {
        "id" : 1,
        "email": "example@test.com"
    }

    return jsonify(response_body), 200

####################################

@api.route('/profile/image/<int:user_id>', methods=['PUT'])
def handle_upload(user_id):

    # validate that the front-end request was built correctly
    if 'avatar_image' in request.files:
        # upload file to uploadcare
        result = cloudinary.uploader.upload(request.files['avatar_image'])

        # fetch for the user
        user1 = User.query.get(user_id)
        # update the user with the given cloudinary image URL
        user1.profile_image_url = result['secure_url']

        db.session.add(user1)
        db.session.commit()

        return jsonify(user1.serialize()), 200
    else:
        raise APIException('Missing profile_image on the FormData')