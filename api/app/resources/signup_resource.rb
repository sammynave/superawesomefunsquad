class SignupResource < JSONAPI::Resource
  attributes :username, :identification, :password

  def fetchable_fields
    super - [:identification, :password]
  end
end
