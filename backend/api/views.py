from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
import json
from .models import User  # Assuming you have a User model or similar

@csrf_exempt
def signup(request):
    if request.method == 'POST':
        try:
            # Parse JSON request body
            data = json.loads(request.body)
            print("Received Data:", data)

            first_name = data.get('firstName')
            last_name = data.get('lastName')
            dob = data.get('dob')
            email = data.get('email')
            password = data.get('password')

            # Validate the data
            if not all([first_name, last_name, dob, email, password]):
                return JsonResponse({'error': 'All fields are required'}, status=400)

            # Create a new user instance
            user = User.objects.create(
                first_name=first_name,
                last_name=last_name,
                date_of_birth=dob,
                email=email,
                password=password,  # Use hashed passwords in production
            )
            print("User Created:", user)
            return JsonResponse({'message': 'User created successfully!'}, status=201)
        except Exception as e:
            print("Error:", e)
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': 'Invalid request method'}, status=405)


def sample_api(request):
    return JsonResponse({'message': 'Hello from Django!'})


@csrf_exempt
def login_view(request):
    if request.method == 'POST':
        try:
            print("Raw Request Body:", request.body)  # Log raw request body
            data = json.loads(request.body)  # Parse JSON
            print("Parsed Data:", data)  # Log parsed JSON

            # Extract email and password
            email = data.get('email')
            password = data.get('password')

            # Validate presence of email and password
            if not email or not password:
                print("Missing email or password")
                return JsonResponse({'error': 'Email and password are required'}, status=400)

            # Authenticate user (works if you’ve customized User model to use email)
            user = authenticate(username=email, password=password)

            if user is not None:
                print("Authentication successful for:", email)
                return JsonResponse({'message': 'Login successful!'}, status=200)
            else:
                print("Invalid credentials for:", email)
                return JsonResponse({'error': 'Invalid credentials'}, status=400)
        except json.JSONDecodeError as e:
            print("JSON Decode Error:", e)
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)
        except Exception as e:
            print("Unexpected Error:", e)
            return JsonResponse({'error': str(e)}, status=400)

    return JsonResponse({'error': 'Invalid request method'}, status=405)