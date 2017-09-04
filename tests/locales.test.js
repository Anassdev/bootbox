// Generated by CoffeeScript 1.7.1
describe("bootbox locales", function() {
  beforeEach(function() {
    return this.setLocale = function(locale) {
      var d1, d2;
      bootbox.setLocale(locale);
      d1 = bootbox.alert("foo");
      d2 = bootbox.confirm("foo", function() {
        return true;
      });
      return this.labels = {
        ok: d1.find(".btn:first").text(),
        cancel: d2.find(".btn:first").text(),
        confirm: d2.find(".btn:last").text()
      };
    };
  });
  describe("Invalid locale", function() {
    beforeEach(function() {
      return this.setLocale("xx");
    });
    it("shows the default OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the default CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Cancel");
    });
    return it("shows the default CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("OK");
    });
  });
  describe("Arabic", function() {
    beforeEach(function() {
      return this.setLocale("ar");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("موافق");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("الغاء");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("تأكيد");
    });
  });
  describe("Azerbaijani", function() {
    beforeEach(function() {
      return this.setLocale("ar");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal('OK');
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal('İmtina et');
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal('Təsdiq et');
    });
  });
  describe("English", function() {
    beforeEach(function() {
      return this.setLocale("en");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Cancel");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("OK");
    });
  });
  describe("French", function() {
    beforeEach(function() {
      return this.setLocale("fr");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Annuler");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Confirmer");
    });
  });
  describe("German", function() {
    beforeEach(function() {
      return this.setLocale("de");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Abbrechen");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Akzeptieren");
    });
  });
  describe("Spanish", function() {
    beforeEach(function() {
      return this.setLocale("es");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Cancelar");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Aceptar");
    });
  });
  describe("Basque", function() {
    beforeEach(function() {
      return this.setLocale("eu");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Ezeztatu");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Onartu");
    });
  });
  describe("Portuguese", function() {
    beforeEach(function() {
      return this.setLocale("br");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Cancelar");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Sim");
    });
  });
  describe("Dutch", function() {
    beforeEach(function() {
      return this.setLocale("nl");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Annuleren");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Accepteren");
    });
  });
  describe("Russian", function() {
    beforeEach(function() {
      return this.setLocale("ru");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Отмена");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Применить");
    });
  });
  describe("Indonesian", function() {
    beforeEach(function() {
      return this.setLocale("id");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Batal");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("OK");
    });
  });
  describe("Italian", function() {
    beforeEach(function() {
      return this.setLocale("it");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Annulla");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Conferma");
    });
  });
  describe("Polish", function() {
    beforeEach(function() {
      return this.setLocale("pl");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Anuluj");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Potwierdź");
    });
  });
  describe("Danish", function() {
    beforeEach(function() {
      return this.setLocale("da");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Annuller");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Accepter");
    });
  });
  describe("Chinese", function() {
    describe("Taiwan", function() {
      beforeEach(function() {
        return this.setLocale("zh_TW");
      });
      it("shows the correct OK translation", function() {
        return expect(this.labels.ok).to.equal("OK");
      });
      it("shows the correct CANCEL translation", function() {
        return expect(this.labels.cancel).to.equal("取消");
      });
      return it("shows the correct CONFIRM translation", function() {
        return expect(this.labels.confirm).to.equal("確認");
      });
    });
    return describe("China", function() {
      beforeEach(function() {
        return this.setLocale("zh_CN");
      });
      it("shows the correct OK translation", function() {
        return expect(this.labels.ok).to.equal("OK");
      });
      it("shows the correct CANCEL translation", function() {
        return expect(this.labels.cancel).to.equal("取消");
      });
      return it("shows the correct CONFIRM translation", function() {
        return expect(this.labels.confirm).to.equal("确认");
      });
    });
  });
  describe("Norwegian", function() {
    beforeEach(function() {
      return this.setLocale("no");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Avbryt");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("OK");
    });
  });
  describe("Swedish", function() {
    beforeEach(function() {
      return this.setLocale("sv");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Avbryt");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("OK");
    });
  });
  describe("Latvian", function() {
    beforeEach(function() {
      return this.setLocale("lv");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("Labi");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Atcelt");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Apstiprināt");
    });
  });
  describe("Lithuanian", function() {
    beforeEach(function() {
      return this.setLocale("lt");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("Gerai");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Atšaukti");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Patvirtinti");
    });
  });
  describe("Turkish", function() {
    beforeEach(function() {
      return this.setLocale("tr");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("Tamam");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("İptal");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Onayla");
    });
  });
  describe("Hebrew", function() {
    beforeEach(function() {
      return this.setLocale("he");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("אישור");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("ביטול");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("אישור");
    });
  });
  describe("Greek", function() {
    beforeEach(function() {
      return this.setLocale("el");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("Εντάξει");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Ακύρωση");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Επιβεβαίωση");
    });
  });
  describe("Japanese", function() {
    beforeEach(function() {
      return this.setLocale("ja");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("キャンセル");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("確認");
    });
  });
  describe("Hungarian", function() {
    beforeEach(function() {
      return this.setLocale("hu");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Mégsem");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Megerősít");
    });
  });
  describe("Croatian", function() {
    beforeEach(function() {
      return this.setLocale("hr");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Odustani");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Potvrdi");
    });
  });
  describe("Bulgarian", function() {
    beforeEach(function() {
      return this.setLocale("bg_BG");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("Ок");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Отказ");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Потвърждавам");
    });
  });
  describe("Thai", function() {
    beforeEach(function() {
      return this.setLocale("th");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("ตกลง");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("ยกเลิก");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("ยืนยัน");
    });
  });
  describe("Persian", function() {
    beforeEach(function() {
      return this.setLocale("fa");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("قبول");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("لغو");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("تایید");
    });
  });
  describe("Ukrainian", function() {
      beforeEach(function() {
          return this.setLocale("uk");
      });
      it("shows the correct OK translation", function() {
          return expect(this.labels.ok).to.equal("OK");
      });
      it("shows the correct CANCEL translation", function() {
          return expect(this.labels.cancel).to.equal("Відміна");
      });
      return it("shows the correct CONFIRM translation", function() {
          return expect(this.labels.confirm).to.equal("Прийняти");
      });
  });
  return describe("Albanian", function() {
    beforeEach(function() {
      return this.setLocale("sq");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Anulo");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Prano");
    });
  });
  return describe("Slovenian", function() {
    beforeEach(function() {
      return this.setLocale("sl");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Prekliči");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Potrdi");
    });
  });
  return describe("Slovak", function() {
    beforeEach(function() {
      return this.setLocale("sk");
    });
    it("shows the correct OK translation", function() {
      return expect(this.labels.ok).to.equal("OK");
    });
    it("shows the correct CANCEL translation", function() {
      return expect(this.labels.cancel).to.equal("Zrušiť");
    });
    return it("shows the correct CONFIRM translation", function() {
      return expect(this.labels.confirm).to.equal("Potvrdiť");
    });
  });
});
