"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _firebase = _interopRequireDefault(require("./firebase"));

require("./style.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Login = /*#__PURE__*/function (_Component) {
  _inherits(Login, _Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    _classCallCheck(this, Login);

    _this = _super.call(this, props);
    _this.state = {
      email: "",
      password: "",
      fireErrors: ""
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.login = _this.login.bind(_assertThisInitialized(_this));
    _this.signup = _this.signup.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Login, [{
    key: "login",
    value: function login(e) {
      var _this2 = this;

      e.preventDefault();

      _firebase.default.auth().signInWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
        _this2.setState({
          fireErrors: error.message
        });
      });
    }
  }, {
    key: "signup",
    value: function signup(e) {
      var _this3 = this;

      e.preventDefault();

      _firebase.default.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch(function (error) {
        _this3.setState({
          fireErrors: error.message
        });
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var error = this.state.fireErrors ? /*#__PURE__*/_react.default.createElement("div", {
        id: "Error"
      }, " ", this.state.fireErrors, " ") : null;
      return /*#__PURE__*/_react.default.createElement("div", {
        id: "container"
      }, /*#__PURE__*/_react.default.createElement("div", {
        id: "signupfields"
      }, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("h2", null, "Enter User Account Details"), /*#__PURE__*/_react.default.createElement("div", {
        id: "formfields"
      }, error, /*#__PURE__*/_react.default.createElement("label", null, "Email-Id"), /*#__PURE__*/_react.default.createElement("input", {
        type: "email",
        id: "forminput",
        name: "email",
        placeholder: "Your Email",
        onChange: this.handleChange,
        value: this.state.email
      })), /*#__PURE__*/_react.default.createElement("label", null, "Password"), /*#__PURE__*/_react.default.createElement("input", {
        type: "password",
        id: "forminput",
        name: "password",
        placeholder: "Password",
        onChange: this.handleChange,
        value: this.state.password
      }), /*#__PURE__*/_react.default.createElement("button", {
        id: "button",
        onClick: this.login
      }, "Login"), "\xA0", /*#__PURE__*/_react.default.createElement("button", {
        id: "button",
        onClick: this.signup
      }, "Register"))));
    }
  }]);

  return Login;
}(_react.Component);

var _default = Login;
exports.default = _default;