user = [
    {
        email: "test@test.com",
        password: "123456",
        password_confirmation: "123456"
    }
]

user.each do |attribute|
    User.create attribute
end

apartments = [
    {
        street: "123 Hill St",
        city: "San Diego",
        state: "CA",
        manager: "Joe",
        email: "joe@test.com",
        price: "1000",
        bedrooms: 2,
        bathrooms: 2,
        pets: "yes"
    }
]

test_user = User.first

apartments.each do |attribute|
    test_user.apartments.create attribute
end