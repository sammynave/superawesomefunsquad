class FrontEndController < ApplicationController
  SHORT_UUID_V4_REGEXP = /\A[0-9a-f]{7}\z/i
  def index
    index_key = if Rails.env.development?
                  'front-end:__development__'
                elsif fetch_revision
                  "front-end:index:#{fetch_revision}"
                else
                  Sidekiq.redis { |r| "front-end:index:#{r.get('front-end:index:current')}" }
                end
    index = Sidekiq.redis { |r| r.get(index_key) }
    render text: add_token_to_index(index), layout: false
  end

  private

  def fetch_revision
    rev = params[:revision]
    if rev =~ SHORT_UUID_V4_REGEXP
      rev
    end
  end

  def add_token_to_index(index)
    return "INDEX NOT FOUND" unless index
    token = form_authenticity_token
    index.sub(/CSRF_TOKEN/, token)
  end
end
