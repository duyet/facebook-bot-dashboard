var mongoose = require('./db');

exports.User = mongoose.model('User', {
    username: String,
    password: String,
    email: String,
    gender: String,
    address: String,
    created: { type: Date, default: new Date() },
    access_token: String
});

exports.Collection = mongoose.model('Collection', {
    url: String,
    title: String,
    host: String,
    user_id: String,
    is_guest: Boolean,
    delete_token: String,
    alias: String, // Shorten
    meta: Object,
    
    view_counter: { type: Number, default: 0 }, // Preview page
    click: { type: Number, default: 0 },
    click_via_alias: { type: Number, default: 0 },
    
    vote: { type: Number, default: 0 },
    tags: Array,
    created: { type: Date, default: new Date() },
    last_update: { type: Date, default: new Date() },
    is_public: { type: Boolean, default: true },

    // features
    review_type: { type: String, default: 'none' },
    review_raw_url: { type: String, default: '' },
    // is_github_markdown_raw: { type: Boolean, default: false },
    // github_markdown_url: { type: String, default: '' },
});

exports.Bot = mongoose.model('Bot', {
    name: String,

    fb_id: String,
    fb_name: String,
    fb_access_token: String,
    fb_roles: Array,
    fb_raw: Object,

    view_counter: { type: Number, default: 0 }, // Preview page

    tags: Array,
    created: { type: Date, default: new Date() },
    last_update: { type: Date, default: new Date() },
});

exports.Setting = mongoose.model('Setting', {
    user_id: String,
    last_change: Date,
    language: String,
    reset_access_token: String,
    timezone: String,
    offline: Boolean
})

exports.UserLog = mongoose.model('UserLog', {
    user_id: String,
    created: { type: Date, default: new Date() },
    ip: String,
    event: String,
    path: String
});